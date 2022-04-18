import styles from "./../../styles/auth.module.scss";
import { useState } from "react";
// import name form "startup"??
export default function invest(){
    const[submit,]=useState(0)
    return (
    <>
    {/* TODO change the placeholder to name push later*/}
    <div className={styles.contactWrapper}>
        <div>
            <img src="/share-client/public/logo.png" alt="Avasar" class="img"/>
            <hr/>
        </div>
        {/* this is heading part */}
        <div>
            <p>
                <h1>You are interested in investing in /*TODO placeholder*/ </h1> 
                <br /> By sending request to /* TODO placeholder*/. you are proposing an investing
            </p>
        </div>
        <div>
        {/* this is money form part */}
            <form>
                <label for="Money">
                <b>1. Investment offered:</b>
                </label>
                <input type="Number" name="Invest" />
            </form>
        </div>
        <p>
                <h3>2. About</h3>
                <strong>Important Information:</strong> To help the startup get proper funding proposal through valid investor. We <br/> verify the record information that identifies each person who opens a account <br/>
                <b>What this means your you:</b> When you open a account, we ask for the name, address, Date of birth and other <br/> information that will allow us to identify you.We make sure your information is encrypted and secured
        </p>
        <div>
        {/* this is info form part*/}
            <form>
            <div>
                    <label htmlFor="fname"></label>
                    <input type="text" placeholder="Legal First name" required/>
                    <label htmlFor="lname"></label>&nbsp&nbsp&nbsp&nbsp
                    <input type="text" placeholder="Legal Last name" required/>
            </div> 
            <div>
                    <label htmlFor="DOB"></label>
                    <input type="date" placeholder="Date of birth" required/>
            </div>
            <div>
                    <label htmlFor="address"></label>
                    <input type="text" placeholder="residence"/>
            </div>
            <div>
                    <label htmlFor="Number"></label>
                    <input type="number" placeholder="Contact number" required/>
            </div>
            <div>
                    <label htmlFor="Email"></label>
                    <input type="email" placeholder="Email" required/>
            </div>
            <div>
                    <label htmlFor="term"></label>
                    <input type="checkbox" required/> I have read and agree to Avasar's <a href="/">Terms of use and Privacy Policy.</a> I furthermore acknowledge that
                    <br/> &nbsp&nbsp&nbsp&nbsp&nbsp Inication of investing request to the startups
            </div>
            <div>
                <label htmlFor="notification"></label>
                <input type="checkbox"/> i would like to receive communications such as new opportunities, company support, and event notification
            </div>
            </form>
            <div>
                {/* TODO link the submit to server */}
                <label htmlFor="submit"></label>
                <button on onClick={()=> set}>
                    send request
                </button>
            </div>
        </div>
    </div>
    </>
    );
};


