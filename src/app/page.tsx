"use client";
import { useEffect, useState, FormEvent } from "react";
import { supabase } from "./lib/supabase";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

interface Student {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  gender: string;
}


export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [form, setForm] = useState<Student>({
    id: "",
    name: "",
    email: "",
    phone_number: "",
    gender: "Male",
  });

  const [editId,setEditId] = useState<string | null>(null);
  
  //Handle Form Submit
  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(form);
    
    const { error } = await supabase.from("students").insert([form]);
    
    if (error) {
      toast.error(`Faild to create ${error.message}`);
    } else {
      toast.success("Student added successfully");
    }
    //Live Update The Form
    setForm({
      id: "",
      name: "",
      email: "",
      phone_number: "",
      gender: "Male",
    })
  }
  //Fetch Students Data To Table
  

  return (
    <>
      {/*Student Management Form*/}
      <div className="container my-5">
        <Toaster />
        <h3 className="mb-4">Student Management</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label className="form-label">Id:</label>
                    <input
                      type="text"
                      value={form.id}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          id: event.target.value,
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          name: event.target.value,
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          email: event.target.value,
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Phone Number:</label>
                    <input
                      type="text"
                      value={form.phone_number}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          phone_number: event.target.value,
                        })
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Gender:</label>
                    <select
                      className="form-select"
                      value={form.gender}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          gender: event.target.value,
                        })
                      }
                    >
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
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
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
