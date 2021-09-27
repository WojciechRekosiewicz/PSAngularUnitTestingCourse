import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent deep', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        
        HEROES = [
            {id: 1, name: 'Potato', strenth: 69},
            {id: 2, name: 'Ratata', strenth: 12},
            {id: 3, name: 'KappaMan', strenth: 420}
        ];

        TestBed.configureTestingModule({
            declarations: [HeroesComponent, HeroComponent],
            providers: [{ provide: HeroService, useValue: mockHeroService }],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroesComponent);
    });
    
    it('should render each hero as a HeroComponent', () => {        
        mockHeroService.getHeroes.and.returnValue(of(HEROES));

        //ngUnInit
        fixture.detectChanges();

        const heroComponentsDebugEl = fixture.debugElement.queryAll(By.directive(HeroComponent));
        
        expect(heroComponentsDebugEl.length).toEqual(3);
        expect(heroComponentsDebugEl[0].componentInstance.hero.name).toEqual('Potato');
        for(let i=0; i < heroComponentsDebugEl.length; i++){
            expect(heroComponentsDebugEl[i].componentInstance.hero).toEqual(HEROES[i]);
        }
    });

});