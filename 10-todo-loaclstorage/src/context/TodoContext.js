import { useContext, createContext } from "react";

export const TodoContext = createContext({
    Todos: [
        {
            id: 1,
            todo: "First Todo",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
});

// Named export instead of default export
export function useTodo() {
    return useContext(TodoContext);
}

// Corrected Provider export
export const TodoProvider = TodoContext.Provider;
