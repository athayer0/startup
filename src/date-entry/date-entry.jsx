import React from 'react';

export function DateEntry() {
  return (
    <main className="container my-3">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="mb-4 text-center">
                    <p className="mb-1"><b>User:</b> Mystery User</p>
                    <hr/>
                </div>

                <div className="card shadow-sm p-4">
                    <h4 className="card-title mb-4 text-center">Enter your mission start and end dates below:</h4>
                    <form type="get" action="timeline.html">
                        <div className="mb-3">
                            <label for="start-date" className="form-label">Start date</label>
                            <input type="text" id="start-date" className="form-control" placeholder="MM-DD-YYYY"/>
                        </div>
                        <div className="mb-3">
                            <label for="end-date" className="form-label">End date</label>
                            <input type="text" id="end-date" className="form-control" placeholder="MM-DD-YYYY"/>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">Generate Timeline</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  );
}