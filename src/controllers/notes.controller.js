export const List = (req, res) => {
  const { sort } = req.query;
  res.json({ success: true });
};

export const Create = (req, res) => {
  const { title, name } = req.body;
  res.json({ success: true });
};

export const Read = (req, res) => {
  const { id } = req.params;
  res.json({ success: true });
};

export const Update = (req, res) => {
  const { id } = req.params;
  const { title, name } = req.body;
  res.json({ success: true });
};

export const DeleteNote = (req, res) => {
  const { id } = req.params;

  res.json({ success: true });
};
