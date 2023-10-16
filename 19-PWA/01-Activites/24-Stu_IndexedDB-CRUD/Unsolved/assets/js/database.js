import { openDB } from 'idb';

const initdb = async () =>
  openDB('todos', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

export const postDb = async (content) => {
  console.log('Post to the ase');
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readwrite');
  const store = tx.objectStore('todos');
  const request = store.add({ todo: content });
  const result = await request;
  console.log('Data saved to the database', result);
};

export const getAllDb = async () => {
  console.log('GET all from the database');
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readonly');
  const store = tx.objectStore('todos');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};


export const getOneDb = async (id) => {
  console.log('GET from the database');
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readonly');
  const store = tx.objectStore('todos');
  const request = store.get(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

// TODO: Fix the function below:
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readwrite');
  const store = tx.objectStore('todos');
  const request = store.delete(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

// TODO: Fix the function below:
export const putDb = async (id, content) => {
  console.log('PUT to the database');
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todo', 'readwrite');
  const store = tx.objectStore('todos');
  const request = store.put({ id: id, todo: content });
  const existing =  await store.get(id);
  if (existing) {
    existing.todo = content;
    await store.put({
      id: id, 
      todo: content
    });
    console.log('Data updated in database', existing);
  }
  const result = await request;
  console.log('Data saved to the database', result);
};

initdb();
