class FormValidation {
    constructor(regEpxName, regExpPhone, regExpPass, form, wrong) {
        this.regEpxName = regEpxName
        this.regExpPhone = regExpPhone
        this.regExpPass = regExpPass
        this.form = form
        this.wrong = wrong
    }

    //Собирает в Map поля для проверки и регулярки, после чего проверяет
    valueGrouping(firstName, phone, password) {
        const validationArr = [[this.regEpxName, firstName],
            [this.regExpPhone, phone],
            [this.regExpPass, password]]
        return new Map(validationArr)
    }

    //Тестирует поле по связанному с ним рег выражению
    useValidation(e, firstName, phone, password, repPassword) {
        const validMap = this.valueGrouping(firstName, phone, password)

        let index = 0
        const testRegArr = []
        for (const [key, value] of validMap.entries()) {
            const test = key.test(value)

            if (test) {
                this.wrong[index].style.display = 'none'
            } else {
                this.wrong[index].style.display = 'initial';
            }

            testRegArr.push(test)
            ++index
        }

        // Проверка репита пароля
        if (repPassword !== password) {
            this.wrong[this.wrong.length - 1].style.display = 'initial'
            e.preventDefault()
        } else {
            this.wrong[this.wrong.length - 1].style.display = 'none'
        }

        //Останавливаем сабмит если данные не прошли валидацию
        if (testRegArr.includes(false)) {
            e.preventDefault()
        }

    }


    // Регистрация сабмита
    registerCheckValidation() {
        this.form.addEventListener('submit', (e) => {
            const formData = new FormData(this.form)
            const firstName = formData.get('firstName')
            const phone = formData.get('phone')
            const password = formData.get('password')
            const repPassword = formData.get('repPassword')

            this.useValidation(e, firstName, phone, password, repPassword)
        })
    }
}

const checkName = /^[a-zA-Zа-яА-Я]{3,30}$/
const checkPhone = /^(\+?\d{10,15})$/
const checkPassword = /^(?=.*[A-Z])(?=.*\d).{8,40}$/
const wrong = document.getElementsByClassName('wrong')
const form = document.getElementById('reg_Form');

const formUserData = new FormValidation(checkName, checkPhone, checkPassword, form, wrong)
formUserData.registerCheckValidation()

