class Employee {
    constructor(url, dataContainer, paginationContainer) {
        this.url = url
        this.queryStrings = '?page=0'
        this.dataContainer = dataContainer
        this.paginationContainer = paginationContainer
        this.pagination = new Pagination(this);
        this.cuurentPage = 1
    }

    // Запрос на API
    async getDataPerson(url) {
        let request
        try {
            request = await fetch(url)
        } catch (err) {
            console.log(err)
            const body = document.querySelector('body')
            body.innerHTML = 'ERROR'
            throw err;
        }
        return request.json()
    }

    //Отрисовка карточек по итогу запроса
    async cardRender(queryString) {
        let response

        response = await this.getDataPerson(this.url + queryString)
        this.dataContainer.innerHTML = ''
        this.paginationContainer.innerHTML = ''

        response.data.forEach((person) => {
            this.dataContainer.innerHTML += `
        <div class="people_info__person">
            <div class="person__avatar">
                <img src="${person.avatar}" alt="${person.id}">
            </div>
            <div class="person__name">
                <p>${person.first_name} ${person.last_name}</p>
            </div>
            <div class="person__email">
                <p>${person.email}</p>
            </div>
        </div>`
        })

        this.pagination.paginationRender(response.total_pages, this.cuurentPage)
        this.pagination.paginationLink(this.cuurentPage)

    }
}

class Pagination {
    constructor(employee) {
        this.employee = employee
    }

    //Отрисовка пагинации
    paginationRender(totalPages, currentPage) {
        for (let i = 0; i < totalPages; i++) {
            if (i + 1 === currentPage) {
                this.employee.paginationContainer.innerHTML += `<div class="pagination__page active">${i + 1}</div>`
            } else {
                this.employee.paginationContainer.innerHTML += `<div class="pagination__page">${i + 1}</div>`
            }
        }
    }

    //Регистрация ссылок
    paginationLink(currentPage) {
        let paginationPage = document.querySelectorAll('.pagination__page')
        paginationPage.forEach((elem, index) => {
            elem.addEventListener('click', () => {
                if (index + 1 !== currentPage) {
                    let queryStrings = `?page=${index + 1}`;
                    this.employee.cuurentPage = index + 1
                    this.employee.cardRender(queryStrings)
                }
            })
        })
    }
}


const [dataContainer, paginationContainer] = document.querySelectorAll('.people_info, .pagination')
const url = 'https://reqres.in/api/users'

const employees = new Employee(url, dataContainer, paginationContainer)
employees.cardRender(employees.queryStrings)
