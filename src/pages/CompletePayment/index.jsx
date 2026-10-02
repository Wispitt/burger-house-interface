
import { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

import './styles.css';

export function CompletePayment() {
    const stripe = useStripe();
    const { search } = useLocation();

    const [status, setStatus] = useState('loading');

    useEffect(() => {
        if (!stripe) return;

        let active = true;

        const verifyPayment = async () => {
            const clientSecret = new URLSearchParams(search).get(
                'payment_intent_client_secret'
            );

            if (!clientSecret) {
                setStatus('error');
                return;
            }

            try {
                const { paymentIntent } =
                    await stripe.retrievePaymentIntent(clientSecret);

                if (!active) return;

                if (!paymentIntent) {
                    setStatus('error');
                    return;
                }

                switch (paymentIntent.status) {
                    case 'succeeded':
                        setStatus('success');
                        break;

                    case 'processing':
                        setStatus('processing');
                        break;

                    default:
                        setStatus('error');
                }
            } catch {
                if (active) {
                    setStatus('error');
                }
            }
        };

        verifyPayment();

        return () => {
            active = false;
        };
    }, [stripe, search]);

    const homeLink = '/burger-house-interface/home';

    if (status === 'loading') {
        return (
            <main className="complete-page">
                <div className="complete-card loading-card">
                    <div className="status-icon loading-icon">
                        <span />
                    </div>

                    <span className="status-label">
                        AGUARDE UM INSTANTE
                    </span>

                    <h1>
                        Verificando
                        <br />
                        seu pagamento
                    </h1>

                    <p>
                        Estamos confirmando seu pagamento.
                        Isso pode levar alguns segundos.
                    </p>

                    <div className="loading-bar">
                        <span />
                    </div>

                    <div className="secure-message">
                        <span>🔒</span>
                        Ambiente seguro de pagamento
                    </div>
                </div>
            </main>
        );
    }

    if (status === 'processing') {
        return (
            <main className="complete-page">
                <div className="complete-card processing-card">
                    <div className="status-icon processing-icon">
                        <span>◷</span>
                    </div>

                    <span className="status-label">
                        PAGAMENTO EM ANÁLISE
                    </span>

                    <h1>
                        Quase lá!
                    </h1>

                    <p>
                        Seu pagamento está sendo processado.
                        Assim que for confirmado, tudo estará pronto.
                    </p>

                    <div className="info-box">
                        <span>💳</span>
                        <div>
                            <strong>Pagamento em processamento</strong>
                            <small>
                                A confirmação pode levar alguns instantes.
                            </small>
                        </div>
                    </div>

                    <a className="complete-button" href={homeLink}>
                        Voltar para a loja
                        <span>→</span>
                    </a>
                </div>
            </main>
        );
    }

    if (status === 'error') {
        return (
            <main className="complete-page">
                <div className="complete-card error-card">
                    <div className="status-icon error-icon">
                        <span>!</span>
                    </div>

                    <span className="status-label">
                        NÃO FOI POSSÍVEL CONFIRMAR
                    </span>

                    <h1>
                        Ops! Algo
                        <br />
                        não saiu como esperado.
                    </h1>

                    <p>
                        Não conseguimos confirmar seu pagamento.
                        Verifique as informações ou tente novamente.
                    </p>

                    <div className="info-box error-info">
                        <span>⚠️</span>
                        <div>
                            <strong>Pagamento não confirmado</strong>
                            <small>
                                Se houve cobrança, entre em contato
                                com nosso atendimento.
                            </small>
                        </div>
                    </div>

                    <a className="complete-button" href={homeLink}>
                        Voltar para a loja
                        <span>→</span>
                    </a>
                </div>
            </main>
        );
    }

    return (
        <main className="complete-page">
            <div className="complete-card success-card">
                <div className="success-glow" />

                <div className="status-icon success-icon">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M5 12.5L10 17L19 7"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <span className="status-label success-label">
                    PAGAMENTO CONFIRMADO
                </span>

                <h1>
                    Pedido
                    <br />
                    confirmado!
                </h1>

                <p>
                    Seu pagamento foi confirmado com sucesso.
                    Agora é só relaxar e aguardar!
                </p>

                <div className="success-message">
                    <div>
                        <strong>Obrigado pela sua compra!</strong>
                        <small>
                            Seu pedido está seguindo para as próximas etapas.
                        </small>
                    </div>
                </div>

                <a className="complete-button" href={homeLink}>
                    Voltar para a loja
                    <span>→</span>
                </a>

                <div className="secure-message">
                    Pagamento processado com segurança
                </div>
            </div>
        </main>
    );
}