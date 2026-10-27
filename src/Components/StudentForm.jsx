
import { useState } from 'react'

function StudentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    semester:'',
    gender:''
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })

    setError('')
    setSuccess('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (formData.name.trim().length < 3) {
      setError('Name must be at least 3 characters.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(formData.email.trim())) {
      setError('Please enter a valid email.')
      return
    }
    if(formData.age<18){
        setError('Invalid Age')
        return
    }
    if(!formData.semester){
        setError("Enter your seM")
        return
    }
    if(!formData.gender){
        setError("enter your gender")
        return
    }
    console.log('Name:', formData.name)
    console.log('Email:', formData.email)
    console.log('Age',formData.age)
    console.log('sem',formData.semester)


    setSuccess('Form submitted successfully!')

    setFormData({
      name: '',
      email: '',
      age: '',
      semester:'',
      gender:''
    })
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <h2 className="mb-4">Student Form</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>
           <div className="mb-3">
            <label className="form-label">Age</label>

            <input
              type="text"
              name="age"
              className="form-control"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
            
<       div className="mb-3">
            <label className="form-label">Semester</label>

              <select
                 name="semester"
                className="form-select"
                 value={formData.semester}
                    onChange={handleChange}
    >
             <option value="">Select Semester</option>
                 <option value="1">Semester 1</option>
                 <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
                 <option value="7">Semester 7</option>
                <option value="8">Semester 8</option>
            </select>
            </div>
             
             {/* Gender */}
<div className="mb-3">
  <label className="form-label d-block">Gender</label>

  <div className="form-check form-check-inline">
    <input
      type="radio"
      name="gender"
      value="Male"
      className="form-check-input"
      checked={formData.gender === 'Male'}
      onChange={handleChange}
    />
    <label className="form-check-label">Male</label>
  </div>

  <div className="form-check form-check-inline">
    <input
      type="radio"
      name="gender"
      value="Female"
      className="form-check-input"
      checked={formData.gender === 'Female'}
      onChange={handleChange}
    />
    <label className="form-check-label">Female</label>
  </div>
        </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="alert alert-success">
              {success}
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default StudentForm
