import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import { useId } from 'react';

import { ProductImage, SelectStatus } from './styles';
import { formateDate } from '../../../utils/formateDate';
import { options } from './orderStatus';
import { api } from '../../../services/api';

export function Row({ row, orders, setOrders }) {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const detailsId = useId();

	async function newStatusOrder(id, status) {
		try {
			setLoading(true);
			await api.put(`/orders/${id}`, { status: status });
			const newOrder = orders.map((order) =>
				order._id === id ? { ...order, status: status } : order,
			);

			setOrders(newOrder);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	return (
		<>
			<TableRow sx={{ '& > .MuiTableCell-root': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label={open ? 'collapse row' : 'expand row'}
						aria-expanded={open}
						aria-controls={detailsId}
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.orderId}
				</TableCell>
				<TableCell>{row.name}</TableCell>
				<TableCell>{formateDate(row.date)}</TableCell>
				<TableCell>
					<SelectStatus
						options={options.filter((status) => status !== 0)}
						defaultValue={options.find(
							(status) => status.value === row.status || null,
						)}
						placeholder="Status do Pedido"
						onChange={(status) => newStatusOrder(row.orderId, status.value)}
						isLoading={loading}
						menuPortalTarget={document.body}
					/>
				</TableCell>
			</TableRow>
			<TableRow id={detailsId} aria-hidden={!open ? true : undefined}>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								Pedido
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell align="center">Id</TableCell>
										<TableCell align="center">Quantidade</TableCell>
										<TableCell >Nome do Produto</TableCell>
										<TableCell>Categoria</TableCell>
										<TableCell >Imagem do Produto</TableCell>
										<TableCell />
									</TableRow>
								</TableHead>
								<TableBody>
									{row.products.map((product) => (
										<TableRow key={product.id}>
											<TableCell align="center" component="th">
												{product.id}
											</TableCell>
											<TableCell align="center" component="th">
												{product.quantity}
											</TableCell>
											<TableCell className='table-value'>{product.name}</TableCell>
											<TableCell className='table-value'>{product.category}</TableCell>
											<TableCell>
												<ProductImage
													src={product.url}
													alt={product.name}
													style={
														product.id === 44
															? { height: '100px', marginLeft: '25px' }
															: undefined
													}
												/>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

Row.propTypes = {
	order: PropTypes.array.isRequired,
	setOrders: PropTypes.func.isRequired,
	row: PropTypes.shape({
		name: PropTypes.string.isRequired,
		orderId: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		products: PropTypes.arrayOf(
			PropTypes.shape({
				category: PropTypes.string.isRequired,
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				price: PropTypes.string.isRequired,
				quantity: PropTypes.number.isRequired,
				url: PropTypes.string.isRequired,
			}),
		).isRequired,
		status: PropTypes.string.isRequired,
	}).isRequired,
};
