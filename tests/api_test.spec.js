import { test, expect } from '@playwright/test';

const CAPITAL = 'pretoria';
const sasl = 'South African Sign Language';
const baseURL = 'https://restcountries.com/v3.1';

test('API Get country using its capital Request', async function ({ request }) {

    // Create a context that will issue http requests.
    // Act
    const response = await request.get(baseURL + `/capital/${CAPITAL}`);

    // Assert
    expect(response.status()).toBe(200);
    const responseText = await response.text();
    expect(responseText).toContain("South Africa");
    console.log('Show response on logs', await response.json());
})


test('An API to POST South African Sign Language as one of the official langues in SA', async function ({ request }) {

    // Arrange
    const response = await request.post(baseURL + `/capital/${CAPITAL}`, {
        headers: {
            'Accept': 'application/json'
        },
        data: {
            "languages": {
                "sasl": "South African Sign Language"
            }
        }
    });

    // Assert
    expect(response.status()).toBeTruthy();
    const responseText = await response.text();
    expect(responseText).toContain(sasl);
    console.log(await response.json());
})