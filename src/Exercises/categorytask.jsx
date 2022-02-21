import { useState } from "react";

function Tasks({list}) {
  return (
    <>
      {list.map((item, idx) => {
        return (
          <div key={idx}>{item.body}</div>
        )
      })}
    </>
  )
};

function Categories({list, selectCategory}) {
  function handleCategory(e) {
    selectCategory(e.target.innerText)
  }
  return (
    <>
      {list.map((category, idx) => {
        return <div onClick={handleCategory} key={idx}>{category}</div>
      })}
    </>
  )
}

function Exercise_6() {
  const initialCategories = [
    "important", "urgent", "normal"
  ]
  const initialTasks = [
    {
      category: "important",
      body: "task 1"
    },
    {
      category: "urgent",
      body: "task 2"
    },
    {
      category: "important",
      body: "task 3"
    },
    {
      category: "urgent",
      body: "task 4"
    },
    {
      category: "normal",
      body: "task 5"
    },
  ]
  const [tasks, setTasks] = useState(initialTasks)

  function updateCategory(payload) {
    const filteredTasks = initialTasks.filter(task => task.category === payload)
    setTasks(filteredTasks)
  }
  return (
    <div>
      <header>
        <Categories list={initialCategories} selectCategory={updateCategory} />
        <Tasks list={tasks} />
      </header>
    </div>
  );
}

export default Exercise_6;
