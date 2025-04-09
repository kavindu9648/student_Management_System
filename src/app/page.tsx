export default function Home() {
  return (
    <>
      <div className="container my-5">
        <h3 className="mb-4">Student Management</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                  <div className="mb-3">
                    <label>Email:</label>
                    <input type="email" className="form-control" value="" />
                  </div>
                  <div className="mb-3">
                    <label>Phone Number:</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                  <div className="mb-3">
                    <label>Gender:</label>
                    <select className="form-select">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button className="btn btn-primary w-100">Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
