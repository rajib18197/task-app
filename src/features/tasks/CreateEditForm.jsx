import { useState } from "react";
import Select from "../../components/ui/Select";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import { toast } from "react-toastify";

function errorValidations(field, errors, value) {
  if (
    field === "tags" &&
    value
      .split(",")
      .map((el) => el.trim())
      .filter(Boolean).length === 0
  ) {
    return {
      ...errors,
      [field]: "each tag must be seperated by comma",
    };
  }

  if (
    field === "description" &&
    !(value.trim().length >= 6 && value.trim().length <= 100)
  ) {
    return {
      ...errors,
      [field]: "Description must be in between (6 - 100) characters.",
    };
  }

  console.log(field);
  if (field !== "tags" && field !== "description" && value === "") {
    return {
      ...errors,
      [field]: `${field} Cannot be Empty.`,
    };
  }

  return {
    ...errors,
  };
}

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

    if (e.target.name === "tags") {
      setValues((values) => ({
        ...values,
        [e.target.name]: e.target.value.split(","),
      }));
      return;
    }
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  function handleBlur(e) {
    console.log(e.target.value);
    setErrors((errors) => {
      const nextErrors = errorValidations(
        e.target.name,
        errors,
        e.target.value
      );
      return nextErrors;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);

    if (Object.keys(values).some((value) => values[value].length === 0)) {
      Object.keys(values).forEach((value) => {
        setErrors((errors) => {
          const nextErrors = errorValidations(
            value,
            errors,
            value === "tags" ? values[value].join(",") : values[value]
          );
          return nextErrors;
        });
      });

      return;
    }

    const task = {
      id: isEditSession ? taskToEdit.id : crypto.randomUUID(),
      ...values,
      tags: values.tags.map((el) => el.trim()).filter(Boolean),
    };

    if (isEditSession) {
      onAddTask(task);
      toast.success(`Task successfully edited!`);
    } else {
      onAddTask(task);
      toast.success("New Task successfully created");
    }

    onCancel();
  }

  console.log(errors);

  return (
    <form
      className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
      </h2>

      <div className="space-y-9 text-white lg:space-y-10">
        <FormRow label={"Title"} error={errors.title}>
          <Input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            id="title"
          />
        </FormRow>

        <FormRow label={"Description"} error={errors.description}>
          <textarea
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            id="description"
          ></textarea>
        </FormRow>

        <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          <FormRow label={"Tags"} error={errors.tags}>
            <Input
              type="text"
              name="tags"
              placeholder="Format: 'tag1, tag2, etc.'"
              value={values.tags}
              onChange={handleChange}
              onBlur={handleBlur}
              id="tags"
            />
          </FormRow>

          <FormRow label={"Priority"} error={errors.priority}>
            <Select
              options={[
                { value: "low", label: "Low" },
                { value: "medium", label: "Medium" },
                { value: "high", label: "High" },
              ]}
              value={values.priority}
              onSelect={handleChange}
              name="priority"
              id="priority"
            />
          </FormRow>
        </div>
      </div>

      <div className="mt-16 flex gap-2 justify-center lg:mt-20">
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          onClick={() => onCancel?.()}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
          {isEditSession ? "Save Task" : "Create new Task"}
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
