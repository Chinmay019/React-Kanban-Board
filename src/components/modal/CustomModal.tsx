import { ItemProps } from "../../models/Types";
import { useState } from 'react';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface DeleteModalProps {
    show: boolean,
    close: () => void,
    operation: string,
    item?: ItemProps,
}

interface AddModalProps {
    category: string,
    show: boolean,
    close: () => void,
    operation?: string,
    item?: ItemProps,

}

interface EditModalProps {
    category: string,
    show: boolean,
    close: () => void,
    operation?: string,
    item?: ItemProps,
}

const DeleteDialog = (props: DeleteModalProps) => {
    return (
        <>
            <Modal
                show={ props.show }
                onHide={ props.close }
                backdrop="static"
                keyboard={ false }
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this item with title { props.item?.title }?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ () => props.close() }>
                        Close
                    </Button>
                    <Button variant="danger">Yes, Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const EditDialog = (props: EditModalProps) => {
    const [updatedTitle, setUpdatedTitle] = useState(props.item?.title || '');
    const [updatedDescription, setUpdatedDescription] = useState(props.item?.description || '');

    const editTitleOnChangeHandler = (e, item) => {
        e.preventDefault();
        console.log(item);
        console.log(e.target.value);
        setUpdatedTitle(e.target.value);
    }

    const editDescriptionOnChangeHandler = (e, item) => {
        e.preventDefault();
        console.log(item);
        console.log(e.target.value);
        setUpdatedDescription(e.target.value);
    }

    return (
        <>
            <Modal
                show={ props.show }
                onHide={ props.close }
                backdrop="static"
                keyboard={ false }
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="name@example.com"
                            value={ updatedTitle }
                            autoFocus
                            onChange={ (e) => editTitleOnChangeHandler(e, props.item) }
                        />
                    </Form.Group>
                    <Form.Group
                        className="m-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Description...." rows={ 3 } value={ updatedDescription } onChange={ (e) => editDescriptionOnChangeHandler(e, props.item) } />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ () => props.close() }>
                        Close
                    </Button>
                    <Button variant="warning">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const AddDialog = (props: AddModalProps) => {
    const modalHeader = `Add ` + (props.category == "2" ? `Doing` : props.category == "3" ? `Done` : `To-Do`);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    console.log(props);

    const editTitleOnChangeHandler = (e) => {
        e.preventDefault();
        // console.log(item);
        console.log(e.target.value);
        setTitle(e.target.value);
    }

    const editDescriptionOnChangeHandler = (e) => {
        e.preventDefault();
        // console.log(item);
        console.log(e.target.value);
        setDescription(e.target.value);
    }

    return (
        <>
            <Modal
                show={ props.show }
                onHide={ props.close }
                backdrop="static"
                keyboard={ false }
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{ modalHeader }</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="name@example.com"
                            value={ title }
                            autoFocus
                            onChange={ (e) => editTitleOnChangeHandler(e) }
                        />
                    </Form.Group>
                    <Form.Group
                        className="m-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Description...." rows={ 3 } value={ description } onChange={ (e) => editDescriptionOnChangeHandler(e) } />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ () => {
                        props.close();
                        setTitle('');
                        setDescription('');
                    } }>
                        Close
                    </Button>
                    <Button variant="success">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default function CustomModal (props: any) {
    console.log(props);
    switch (props.operation) {
        case "edit": return EditDialog(props);
        case "add": return AddDialog(props);
        case "delete": return DeleteDialog(props);
        default: return null;
    }
}