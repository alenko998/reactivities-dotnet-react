import { Button, ButtonGroup, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore"
import {Observer} from 'mobx-react-lite';

export default function Counter() {
  const {counterStore} = useStore();

  return (
    <>
    <Observer>
      {() => (
        <>
          <Typography variant="h4" gutterBottom>{counterStore.title}</Typography>
          <Typography variant="h6" gutterBottom>The count is: {counterStore.count}</Typography>
        </>
        )}
      </Observer>
      <ButtonGroup sx={{mb: 3}}>
        <Button onClick={() => counterStore.decrement()} color='error' variant="contained">Decrement</Button>
        <Button onClick={() => counterStore.increment()} color='success' variant="contained">Increment</Button>
        <Button onClick={() => counterStore.increment(5)} color="primary" variant="contained">Increment by 5</Button>
      </ButtonGroup>
    </>
  )
}