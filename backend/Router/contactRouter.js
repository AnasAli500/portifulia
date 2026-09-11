const express = require("express");
const router = express.Router();
const contectControllers = require("../controller/contectControllers");

router.post('/create/contect', contectControllers.createContact);
router.get('/read/contect', contectControllers.getAllContacts);
router.put('/update/contect/:id', contectControllers.updateContact);
router.delete('/delete/contect/:id', contectControllers.deleteContact);

module.exports = router;
