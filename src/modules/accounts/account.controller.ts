//banking-backend/src/modules/accounts/account.controller.ts
import Account from "./account.model.js";

export const createAccount = async (req: any, res: any) => {
  try {
    const { balance, accountType } = req.body;

    const account = await Account.create({
      user: req.user.id,

      accountNumber: Math.floor(
        100000000 + Math.random() * 900000000,
      ).toString(),

      balance,

      accountType,
    });

    res.status(201).json({
      success: true,
      data: account,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAccounts = async (req: any, res: any) => {
  try {
    const accounts = await Account.find()

      .populate("user");

    res.status(200).json({
      success: true,
      data: accounts,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
