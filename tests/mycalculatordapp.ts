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

    it('Add two numbers', async()=> {
        await program.rpc.add(new anchor.BN(2), new anchor.BN(3),{
            accounts:{
                calculator: calculator.publicKey
            }
        })
        const account = await program.account.calculator.fetch(calculator.publicKey)
        assert.ok(account.result.eq(new anchor.BN(5)))
    })


    it('Sub two numbers', async()=> {
        await program.rpc.sub(new anchor.BN(10), new anchor.BN(3),{
            accounts:{
                calculator: calculator.publicKey
            }
        })
        const account = await program.account.calculator.fetch(calculator.publicKey)
        assert.ok(account.result.eq(new anchor.BN(7)))
    })

    it('Mul two numbers', async()=> {
        await program.rpc.multi(new anchor.BN(3), new anchor.BN(5),{
            accounts:{
                calculator: calculator.publicKey
            }
        })
        const account = await program.account.calculator.fetch(calculator.publicKey)
        assert.ok(account.result.eq(new anchor.BN(15)))
    })
})