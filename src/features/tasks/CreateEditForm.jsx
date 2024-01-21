import { useState } from "react";
import Select from "../../components/ui/Select";

export default function CreateEditForm({ onCancel, onAddTask }) {
  const [values, setValues] = useState({
    title: "",
    description: "",
    tags: [],
    priority: "",
  });

  function handleChange(e) {
    if (e.target.name === "tags") {
      setValues((values) => ({
        ...values,
        [e.target.name]: e.target.value.split(",").map((el) => el.trim()),
      }));
      return;
    }
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);

    onAddTask({ ...values });
    onCancel();
  }

  return (
    <form
      class="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      onSubmit={handleSubmit}
    >
      <h2 class="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
      </h2>

      <div class="space-y-9 text-white lg:space-y-10">
        <div class="space-y-2 lg:space-y-3">
          <label for="title">Title</label>
          <input
            class="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            id="title"
            required
          />
        </div>
        <div class="space-y-2 lg:space-y-3">
          <label for="description">Description</label>
          <textarea
            class="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
            id="description"
            required
          ></textarea>
        </div>
        <div class="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          <div class="space-y-2 lg:space-y-3">
            <label for="tags">Tags</label>
            <input
              class="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              value={values.tags}
              onChange={handleChange}
              id="tags"
              required
            />
          </div>
          <div class="space-y-2 lg:space-y-3">
            <label for="priority">Priority</label>
            <Select
              options={[
                { value: "low", label: "Low" },
                { value: "medium", label: "Medium" },
                { value: "high", label: "High" },
              ]}
              value={values.priority}
              onSelect={handleChange}
            />
          </div>
        </div>
      </div>
      <div class="mt-16 flex gap-2 justify-center lg:mt-20">
        <button
          type="submit"
          class="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          onClick={() => onCancel?.()}
        >
          Cancel
        </button>

        <button
          type="submit"
          class="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
          Create new Task
        </button>
      </div>
    </form>
  );
}
