import { Form, Field } from "react-final-form";
import { CustomTextInput } from "./components/CustomTextInput";
import { CustomTextArea } from "./components/CustomTextArea";
import * as z from "zod";
import { validateWithZod } from "./utils/validate-with-zod";

const Schema = z.object({
  firstName: z
    .string({
      required_error: "Required",
      message: "This field is required",
    })
    .min(5, {}),
  interests: z.string({
    message: "This field is required",
    required_error: "Required",
  }),
});

interface SchemaType extends z.infer<typeof Schema> {}

const App = () => {
  const onSubmit = (values: SchemaType) => {
    // Do the logic here
    console.log({ values });
  };

  return (
    <div className="mx-auto p-4">
      <Form
        onSubmit={onSubmit}
        validate={(values) =>
          validateWithZod({
            values,
            schema: Schema,
          })
        }
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="firstName"
              render={(props) => (
                <CustomTextInput
                  label="First Name"
                  placeholder="First Name"
                  {...props}
                />
              )}
            />

            <Field
              name="interests"
              render={(props) => (
                <CustomTextInput label="Interests" {...props} />
              )}
            />

            <Field
              name="bio"
              render={(props) => (
                <CustomTextArea
                  label="Bio"
                  placeholder="Enter a simple bio"
                  {...props}
                />
              )}
            />

            <Field
              name="phone"
              render={(props) => (
                <CustomTextInput label="Phone" placeholder="Phone" {...props} />
              )}
            />

            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};

export default App;
