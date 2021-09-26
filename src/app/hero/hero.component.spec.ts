import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component";

describe('HeroComponent', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'Potato', strength: 77};

        expect(fixture.componentInstance.hero.name).toEqual('Potato');
    });

    it('should render the hero name in a anchor tag', () =>{
        fixture.componentInstance.hero = { id: 1, name: 'Potato', strength: 77};
        fixture.detectChanges();

        let debug = fixture.debugElement.query(By.css('a'));
        expect(debug.nativeElement.textContent).toContain('Potato');

        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Potato');
    });
});