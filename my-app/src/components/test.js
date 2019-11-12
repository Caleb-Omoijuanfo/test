
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update record</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateFirstName(user.id)}>Update</button>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="surName" value={this.state.surName} onChange={this.handleChange} placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateLastName(user.id)}>Update</button>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="dob" value={this.state.dob} onChange={this.handleChange} placeholder="Date of Birth" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateDob(user.id)}>Update</button>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateAge(user.id)}>Update</button>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="height" value={this.state.height} onChange={this.handleChange} placeholder="Height" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateHeight(user.id)}>Update</button>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="weight" value={this.state.weight} onChange={this.handleChange} placeholder="Weight" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.updateWeight(user.id)}>Update</button>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
