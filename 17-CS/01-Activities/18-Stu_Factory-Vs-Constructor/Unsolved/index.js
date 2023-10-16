// TODO: Refactor the class to a factory function.
const information = (state) => ({
  gimme: () => console.log(`The module is ${state.title}. Here is a description: ${state.description}`)
})

const Lesson = (title, description) => {
  const state = {
    title,
    description
  }
  return { ...information(state) };
}

const csForJS = Lesson('Module 17 - Computer Science', 'CS for JS');
csForJS.gimme();
