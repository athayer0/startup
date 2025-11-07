import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <main className="container my-4">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Sign in here:</h2>
                        <div>
                            <div className="mb-3  text-start">
                                <label for="username" className="form-label">Username</label>
                                <input type="text" id="username" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter username"/>
                            </div>
                            <div className="mb-3 text-start">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
                            </div>
                            <div className="d-grid gap-2">
                                <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
                                    Login
                                </Button>
                                <Button variant='outline-secondary' onClick={() => createUser()} disabled={!userName || !password}>
                                    Create
                                </Button>
                            </div>

                            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}