import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve renderizar os comentarios corretamente', () => {
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'primeiro comentario para teste'
            }
        })
        fireEvent.click(screen.getByTestId('botao-enviar'))

        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'segundo comentario para teste'
            }
        })
        fireEvent.click(screen.getByTestId('botao-enviar'))

        // eslint-disable-next-line testing-library/no-node-access
        expect(screen.getByTestId('lista-comentarios').children).toHaveLength(2)
    })
});