import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let mockHeroService;
    let HEROES;


    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'Potato', strenth: 69},
            {id: 2, name: 'Ratata', strenth: 12},
            {id: 3, name: 'KappaMan', strenth: 420}
        ];
        
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService);
        component.heroes = HEROES;
    });

    describe('delete', () => {
        
        it('should remove the indicated hero from hero list', () =>{
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.delete(HEROES[0]);

            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero', () =>{
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.delete(HEROES[0]);

            expect(mockHeroService.deleteHero).toHaveBeenCalled();
        });

        it('should call deleteHero', () =>{
            mockHeroService.deleteHero.and.returnValue(of(true));

            component.delete(HEROES[0]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[0]);
        });
    });    
});