import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './App.css';

import InputForm from './shared/components/form/input-form';

const validationScheme = zod.object({
  name: zod.string().min(1, { message: 'Required' }),
  email: zod.string().email(),
});
function App() {
  const methods = useForm<zod.infer<typeof validationScheme>>({
    resolver: zodResolver(validationScheme),
    mode: 'onChange',
  });

  console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <InputForm label='Name' name='name' />
      <InputForm label='Email' name='email' />
    </FormProvider>
  );
}

export default App;
