import React,{ useState } from 'react'
import { useDispatch} from 'react-redux'
import { edit} from '../JS/actions/actions'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const 
EditTask = ({t}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle]= useState("")

  const dispatch= useDispatch();

  const inputEdit=(e)=>{
    dispatch(edit(t.id,title))
  }
  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Edit Task </Form.Label>
              <Form.Control
                type="text"
                placeholder="task description"
                autoFocus
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
          </Form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{inputEdit();handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default EditTask