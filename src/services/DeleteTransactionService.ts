import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<boolean | AppError> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      return new AppError('Transaction does not exists');
    }

    await transactionRepository.remove(transaction);

    return true;
  }
}

export default DeleteTransactionService;
