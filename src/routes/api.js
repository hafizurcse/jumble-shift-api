#!/usr/bin/env node
/**
 * Created by hafizur.rahman on 29/05/2018.
 */

const express = require('express');
const router = express.Router();

router.post('/jumble', require('./api/jumble'));

module.exports = router;
