// src/services/yourService.ts
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { ExchangeClient } from '../clients/exchange.client';

const transport = new GrpcWebFetchTransport({
    baseUrl: 'http://localhost:8999',
});

const exchangeService = new ExchangeClient(transport);

export default exchangeService
