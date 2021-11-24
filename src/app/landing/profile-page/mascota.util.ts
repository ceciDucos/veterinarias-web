

export abstract class MascotaUtil {
    static getRazaMascota(raza: number)
    {
        let strigRazaText = '';
        switch (raza) {
            case 0: {
                strigRazaText = 'Otro';
                break;
            }
            case 1: {
                strigRazaText = 'Perro Husky';
                break;
            }
            case 2: {
                strigRazaText = 'Perro Chihuahua';
                break;
            }
            case 3: {
                strigRazaText = 'Perro Rottweiler';
                break;
            }
            case 4: {
                strigRazaText = 'Perro BulldogFrances';
                break;
            }
            case 5: {
                strigRazaText = 'Perro Pug';
                break;
            }
            case 6: {
                strigRazaText = 'Perro Boxer';
                break;
            }
            case 7: {
                strigRazaText = 'Perro GranDanes';
                break;
            }
            case 8: {
                strigRazaText = 'Gato Persa';
                break;
            }
            case 9: {
                strigRazaText = 'Gato MaineCoon';
                break;
            }
            case 10: {
                strigRazaText = 'Gato Siames';
                break;
            }
            case 11: {
                strigRazaText = 'Gato Ragdoll';
                break;
            }
            case 12: {
                strigRazaText = 'Gato Siberiano';
                break;
            }
            case 13: {
                strigRazaText = 'Gato Americano';
                break;
            }
            case 14: {
                strigRazaText = 'Gato AzulRuso';
                break;
            }
        }   
    return strigRazaText;     
    }

    static getVacunasAlDia(alDia: boolean) {
        return alDia ? 'Si' : 'No';
    }
}