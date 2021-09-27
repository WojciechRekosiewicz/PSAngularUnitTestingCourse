import { inject, TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('HeroService', () =>{
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let service: HeroService;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);

        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [
                HeroService,
                {provide: MessageService, useValue: mockMessageService}
            ]
        })

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(HeroService);
    });


    describe('getHero', () =>{

        it('should call get with the correct URL', () => {
            
            service.getHero(7).subscribe(hero => {
                // expect(hero.id).toBe(7);
            });

            const req = httpTestingController.expectOne('api/heroes/7');

            req.flush({id: 7, name: 'Potato', strength: 420});
            expect(req.request.method).toBe('GET');
            httpTestingController.verify();

        });

        it('should call get with the correct URL', inject(
            [
                HeroService, 
                HttpTestingController
            ], 
            (
                service: HeroService, 
                controller: HttpTestingController
                ) => {
                service.getHero(8).subscribe();
                    
                const req = controller.expectOne('api/heroes/8');

                req.flush({id: 8, name: 'Potat', strength: 42});
                expect(req.request.method).toBe('GET');
                httpTestingController.verify();
        }));

    });


});