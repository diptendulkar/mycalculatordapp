use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
declare_id!("FEZtVUk1M5NQQaJidJauwtJb4xdyDUpNxA1ckX3Dkjy4");

#[program]
pub mod mycalculatordapp {
    

    use super::*;

    pub fn create(ctx: Context<Create>, init_message: String) -> ProgramResult {

        let calculator = &mut ctx.accounts.calculator;
        calculator.greeting = init_message;
        Ok(())

    }

    pub fn add(ctx: Context<Addition>, num1: i64, num2: i64) -> ProgramResult{
        let calculator = &mut ctx.accounts.calculator;
        calculator.result = num1 + num2;
    }
 
}

#[derive(Accounts)]
pub struct Create<'info>{
    #[account(init, payer=user,space=264)]
    pub calculator: Account<'info,Calculator>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program:  Program<'info,System>

}

#[derive(Accounts)]
pub struct Addition<'info>{
    #[account(mut)]
    pub calculator: Accounts<'info, Calculator>
}

#[account]
pub struct Calculator{
    pub greeting : String,
    pub result: i64,
    pub remainder: i64
}

 
