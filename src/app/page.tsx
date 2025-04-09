"use client";
import { useEffect, useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import toast, { Toast } from "react-hot-toast";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

interface Student {
  id?: string;
  name: string;
  email: string;
  phone_number: string;
  gender: string;
}
export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState<Student>({
    name: "",
    email: "",
    phone_number: "",
    gender: "Male",
  });

  return (
    <>
      {/*Student Management Form*/}
      <div className="container my-5">
        <h3 className="mb-4">Student Management</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" value={form.name} onChange={(event)=>setForm({
                      ...form,name:event.target.value
                    })} className="form-control"  />
                  </div>
                  <div className="mb-3">
                    <label>Email:</label>
                    <input type="email" value={form.email} className="form-control"  />
                  </div>
                  <div className="mb-3">
                    <label>Phone Number:</label>
                    <input type="text" value={form.phone_number} className="form-control"  />
                  </div>
                  <div className="mb-3">
                    <label>Gender:</label>
                    <select className="form-select"value={form.gender }>
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
          {/*Student Details Table*/}
          <div className="col-md-8">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kavindu Eranga</td>
                    <td>keranga297@gmail.com</td>
                    <td>0766723151</td>
                    <td>Male</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2">
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm me-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
