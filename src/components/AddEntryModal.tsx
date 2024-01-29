import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from '../api/axios';
import useFetchBudgetInfo from '../hooks/useFetchBudgetInfo';

type AddEntryModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CREATE_BUDGET_ENTITY_URL = '/api/v1/auth/addBudgetEntity';

const AddEntryModal = ({ isOpen, onClose }: AddEntryModalProps) => {
    const [amount, setAmount] = useState<number>(0);
    const [type, setType] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const { budgetInfo } = useFetchBudgetInfo();
    const budgetId = budgetInfo?.budgetId;
    const [error, setError] = useState<string>('');

    const handleAddEntry = async () => {
        try {
            if (!amount || !type || !category || !date) {
                setError('Please fill in all fields.');
                return;
            }

            const newEntryData = {
                budgetId,
                amount: parseFloat(amount.toString()),
                type,
                category,
                date: new Date(date),
            };

            await axios.post(
                CREATE_BUDGET_ENTITY_URL,
                newEntryData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            onClose();
        } catch (error) {
            console.error('Error while adding entry:', error);
            setError('An error occurred while adding the entry.');
        }
    };

    return (
        <Modal show={isOpen} onHide={onClose} centered>
            <Modal.Dialog>
                <Modal.Header closeButton={false}>
                    <Modal.Title>Add Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="amount">
                            <Form.Label>Amount:</Form.Label>
                            <Form.Control type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
                        </Form.Group>
                        <Form.Group controlId="type">
                            <Form.Label>Type:</Form.Label>
                            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="">Select value</option>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="category">
                            <Form.Label>Category:</Form.Label>
                            <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="date">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </Form.Group>
                    </Form>
                    {error && <div className={"text-danger d-flex justify-content-center"}>{error}</div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddEntry}>
                        Add entry
                    </Button>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
};

export default AddEntryModal;
