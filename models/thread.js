"use strict";

const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

const threadSchema = new Schema(
    {
        title: {
            type: String,
            unique: true
        },
        category: {
            type: String
        }
    }, { timestamps: true }
);

module.exports = mongoose.model("Thread", threadSchema);
aaa