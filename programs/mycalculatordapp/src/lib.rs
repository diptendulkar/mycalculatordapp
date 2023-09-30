use anchor_lang::prelude::*;

declare_id!("FEZtVUk1M5NQQaJidJauwtJb4xdyDUpNxA1ckX3Dkjy4");

#[program]
pub mod mycalculatordapp {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
