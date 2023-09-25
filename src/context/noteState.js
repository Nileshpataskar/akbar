import noteContext from "./noteContext";

const NoteState = (props) => {
  const state = {
    id: 1,
    name: "Nilesh",
  };
  return (
    <noteContext.Provider value={state}>{props.children}</noteContext.Provider>
  );
};
export default NoteState;
