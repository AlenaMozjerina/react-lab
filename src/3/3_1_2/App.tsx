// 3_1_2 Profile editor 
/*
    В проекте приведена форма, реализованная на чистом JavaScript.

    Эта форма переключается между двумя режимами: в режиме редактирования вы видите вводимые данные, а в режиме просмотра - только результат. Метка кнопки меняется между "Редактировать" и "Сохранить" в зависимости от того, в каком режиме вы находитесь. Когда вы изменяете вводимые данные, приветственное сообщение внизу обновляется в режиме реального времени.

    Ваша задача - реализовать это на React. Для вашего удобства разметка уже была преобразована в JSX, но вам нужно будет сделать так, чтобы она показывала и скрывала входы, как это делает оригинал.

    Убедитесь, что она также обновляет текст внизу!
*/

import { useState } from 'react';

export default function EditProfile() {
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');
    const [isEditing, setIsEditing] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsEditing(!isEditing);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First name:{' '}
                {isEditing ? (
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                ) : (
                    <b>{firstName}</b>
                )}
            </label>
            <label>
                Last name:{' '}
                {isEditing ? (
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                ) : (
                    <b>{lastName}</b>
                )}
            </label>
            <button type="submit">
                {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
            <p>
                <i>Hello, {firstName} {lastName}!</i>
            </p>
        </form>
    );
}