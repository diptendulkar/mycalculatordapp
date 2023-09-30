const assert = require('assert')
const anchor = require('@project-serum/anchor')
import { AnchorProvider, web3 } from '@project-serum/anchor';
const {SystemProgram} = anchor.web3
describe('mycalculatordapp',()=>{
    const provider = AnchorProvider.local();
    anchor.setProvider(provider)
    const calculator  = anchor.web3.Keypair.generate()
    const program = anchor.workspace.Mycalculatordapp

    it('Creates a calculotor', async()=>{
        await program.rpc.create("Welcome to Solana Dip",{
            accounts:{
                calculator: calculator.publicKey,
                user: provider.wallet.publicKey,
                systemProgram : SystemProgram.programId
            },
            signers: [calculator]
        })
        const account = await program.account.calculator.fetch(calculator.publicKey)
        assert.ok(account.greeting = "Welcome to Solana Dip")
        
    })
})