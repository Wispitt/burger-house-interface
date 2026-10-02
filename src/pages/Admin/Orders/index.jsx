import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Container, Filter, FilterOption } from './styles';
import { Row } from './row';
import { useEffect } from 'react';
import { api } from '../../../services/api';
import { useState } from 'react';
import { options } from './orderStatus';

export function Orders() {
	const [orders, setOrders] = useState([]);
	const [filteredOrders, setFilteredOrders] = useState([]);
	const [rows, setRows] = useState([]);
	const [activeStatus, setActiveStatus] = useState(0);

	useEffect(() => {
		async function loadOrders() {
			const { data } = await api.get('/orders');

			setFilteredOrders(data);
			setOrders(data);
		}
		loadOrders();
	}, []);

	function createData(order) {
		return {
			name: order.user.name,
			orderId: order._id,
			date: order.createdAt,
			status: order.status,
			products: order.products,
		};
	}

	useEffect(() => {
		const newRows = filteredOrders.map((order) => createData(order));

		setRows(newRows);
	}, [filteredOrders]);

	function handleStatus(status) {
		if (status.id === 0) {
			setFilteredOrders(orders);
		} else {
			const newOrders = orders.filter((order) => order.status === status.value);

			setFilteredOrders(newOrders);
		}

		setActiveStatus(status.id);
	}

	useEffect(() => {
		if (activeStatus === 0) {
			setFilteredOrders(orders);
		} else {
			const statusIndex = options.findIndex((item) => item.id === activeStatus);

			const newFilterOrders = orders.filter(
				(order) => order.status === options[statusIndex].value,
			);
			setFilteredOrders(newFilterOrders);
		}
	}, [orders]);

	return (
		<Container>
			<Filter>
				{options.map((status) => (
					<FilterOption
						key={status.id}
						onClick={() => handleStatus(status)}
						$isActive={activeStatus === status.id}
					>
						{status.label}
					</FilterOption>
				))}
			</Filter>
			<TableContainer component={Paper} className="container-table">
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell>Pedido</TableCell>
							<TableCell>Cliente</TableCell>
							<TableCell>Data do Pedido</TableCell>
							<TableCell >Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<Row
								key={row.orderId}
								row={row}
								orders={orders}
								setOrders={setOrders}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
