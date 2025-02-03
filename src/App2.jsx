import './App.css';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { BsCart3 } from "react-icons/bs";
import Header from './components/header2/Header2';


function App() {


  return (
    <>
      <h1 class="text-3xl font-bold underline">
      Hello world!
      </h1>
      
      <Stack spacing={2} direction="row">
      <Badge badgeContent={3} color="secondary">
        <BsCart3 className='text-[30px]'/>
      </Badge>
      <Badge badgeContent={4} color="success">
        <BsCart3 />
      </Badge>

      <Header />
    </Stack>

    


    </>
  )
}

export default App
