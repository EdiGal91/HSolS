const Form = require("../models/Form");

exports.getAllForms = async function (req, res) {
  const forms = await Form.find();
  res.json(forms);
};

exports.addNewForm = async function (req, res) {
  const { title } = req.body;
  const form = await Form.create({ title });
  res.json(form);
};

exports.addNewFormQuestion = async function (req, res) {
  const { id: formId } = req.params;
  const { question } = req.body;
  const form = await Form.findById(formId);
  form.questions.push(question)
  await form.save()
  res.json(form);
};

exports.deleteFormQuestion = async function (req, res) {
  const { id: formId, question } = req.params;
  const form = await Form.findById(formId);
  form.questions.pull(question)
  await form.save()
  res.json(form);
};

exports.deleteForm = async function (req, res) {
  const { id: formId } = req.params;
  const result = await Form.findByIdAndDelete(formId);
  res.json(result);
};

