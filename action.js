export default function(payload) {
  return {
    type: 'UPDATE',
    payload: {...payload, reducerName: "reducerTemplate"},
  };
}