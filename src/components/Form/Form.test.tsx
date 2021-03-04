import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';
import userEvent from "@testing-library/user-event";

test('testing the name form', async () => {
    render(<Form />);
    const formElement =  screen.getByTestId("form");
    const inputElement =  screen.getByTitle("digite");

    // digita o nome
    userEvent.type(inputElement, "Jeniffer FC");
    // submete o formulario
    fireEvent.submit(formElement)
    // verifica se está com o conteudo
    const paragraphElement = await screen.findByTitle("nome");
    expect(paragraphElement).toHaveTextContent("Jeniffer FC");
});
