import { useState } from "react";
import Select from "../../components/ui/Select";

export default function CreateEditForm({ onCancel, onAddTask, taskToEdit }) {
  const isEditSession = Boolean(taskToEdit?.id);
  console.log(isEditSession);

  const [values, setValues] = useState({
    title: taskToEdit?.title || "",
    description: taskToEdit?.description || "",
    tags: taskToEdit?.tags || [],
    priority: taskToEdit?.priority || "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    tags: "",
    priority: "",
  });

  function handleChange(e) {
    setErrors((errors) => ({ ...errors, [e.target.name]: "" }));

    // if (e.target.name === "tags") {
    //   setValues((values) => ({
    //     ...values,
    //     [e.target.name]: e.target.value.split(",").map((el) => el.trim()),
    //   }));
    //   return;
    // }
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  function handleBlur(e) {
    console.log(e.target.value);
    setErrors((errors) => {
      if (
        e.target.name === "tags" &&
        e.target.value
          .split(",")
          .map((el) => el.trim())
          .filter(Boolean).length === 0
      ) {
        return {
          ...errors,
          [e.target.name]: "each tag must be seperated by comma",
        };
      }

      if (
        e.target.name === "description" &&
        !(
          e.target.value.trim().length >= 6 &&
          e.target.value.trim().length <= 100
        )
      ) {
        return {
          ...errors,
          [e.target.name]:
            "Description must be in between (6 - 100) characters.",
        };
      }

      console.log(e.target.name);
      if (e.target.name !== "tags" && e.target.name !== "description") {
        return {
          ...errors,
          [e.target.name]: `${e.target.name} Cannot be Empty.`,
        };
      }

      return {
        ...errors,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);

    if (Object.keys(errors).length > 0) {
      return;
    }

    if (Object.keys(values).some((value) => values[value].length === 0)) {
      Object.keys(values).forEach((value) => {
        setErrors((errors) => ({
          ...errors,
          [value]: "This field is required",
        }));
      });

      return;
    }

    if (isEditSession) {
      onAddTask({ ...values, id: taskToEdit.id });
    } else {
      onAddTask({ id: crypto.randomUUID(), ...values });
    }

    onCancel();
  }

  console.log(errors);

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
            onBlur={handleBlur}
            id="title"
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div class="space-y-2 lg:space-y-3">
          <label for="description">Description</label>
          <textarea
            class="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            id="description"
          ></textarea>
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div class="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          <div class="space-y-2 lg:space-y-3">
            <label for="tags">Tags</label>
            <input
              class="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              placeholder="Enter tags with comma separated"
              value={values.tags}
              onChange={handleChange}
              onBlur={handleBlur}
              id="tags"
            />
            {errors.tags && <p>{errors.tags}</p>}
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

// console.log(
//   e.target.value
//     .split(",")
//     .map((el) => el.trim())
//     .filter(Boolean).length === 0 ||
//     (e.target.value.split(",").length === 1 &&
//       e.target.value.split(",").join("").includes(" "))
// );
