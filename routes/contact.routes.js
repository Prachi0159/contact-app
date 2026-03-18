import express from 'express'
import { getContact,getContacts,addContactPage,addContact, updateContactPage ,deleteContact, updateContact,} from '../controller/contacts.controller.js'
const router = express.Router()


router.get('/', getContacts)

router.get('/show-contact/:id',getContact)

router.get('/add-contact', addContactPage)

router.post('/add-contact', addContact)

router.get('/update-contact/:id', updateContactPage)

router.post('/update-contact/:id', updateContact)

router.get('/delete-contact/:id', deleteContact)

export default router