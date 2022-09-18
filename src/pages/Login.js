import { db } from './../firebase';
import { ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { jsonEval } from '@firebase/util';
import { Dashboard } from './Dashboard';

function Login() {
    const [email, handleEmailChange] = useState();
    const [password, handlePassChange] = useState();
    const [loggedIn, setLoggedIn] = useState();

    // EFFECTS: gets emails from db, compares to see which type of user
    const formSubmit = () => {
        const getEmails = ref(db, '/');
        onValue(getEmails, (snapshot) => {  
            const volunteerEmail = snapshot.val().Volunteer.Email;
            const charityEmail = snapshot.val().Charity.Email;
            const donatorEmail = snapshot.val().Donator.Email;

            if (email == charityEmail) {
                alert("Is a charity email!");
                setLoggedIn(true);
            }

            alert(email.toString() + " == " + charityEmail);
        });
    };


    return (
        <div>
            {loggedIn ? (
            <Dashboard />       
        ) : (
            <div className="flex items-center justify-center h-screen">
                <img src={require("./../img/bottom-left.png")}
                    style={{position: 'absolute', left: "0px", bottom: "0px", width: "30%", zIndex: -1}}/>

                <img src={require("./../img/top-right.png")} 
                    style={{position: 'absolute', top: "0px", right: "0%", width: "50%", zIndex: -1}}/>

                <img src={require("./../img/C.png")} 
                    style={{position: 'relative', bottom: "35%", right: "-5%", width: "10%", zIndex: -1}}/>

                <div className="Login bg-whte w-96 h-256 h-2/3 rounded-xl py-3 px-3">
                    <img src={require("./../img/logo.png")} 
                    style={{width: "12%"}} />

                    
                    <h1 className='text-3xl'>Login</h1>
                    <br />
                    <label for="email" style={{fontWeight: "bold"}}>Email</label>
                    <br />
                    <input type="text" name="email" value={email} placeholder="charity@gmail.com"
                     onChange={e => handleEmailChange(e.target.value)} className="rounded-md" />
                    <br />
                    <br />
                    <label for="password" style={{fontWeight: "bold"}}>Password</label>
                    <br />
                    <input type="password" name="password" placeholder="password" value={password} className="rounded-md" />
                    <br />
                    <br />
                    <button onClick={() => formSubmit()} style={{backgroundColor: "#3E66FB", color: "white", fontFamily: "Inter-light"}}className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">Submit</button>
                </div>
                <img src={require("./../img/C-upside-down.png")} 
                    style={{position: 'relative', bottom: "-35%", right: "5%", width: "10%", zIndex: -1}}/>

            </div>
        )}
        </div>
    );
}

export { Login };