FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /build

COPY  . .

RUN dotnet publish -o ./public_product




FROM mcr.microsoft.com/dotnet/sdk:9.0 AS deploy

WORKDIR /backend_dotnet

COPY --from=build /build/public_product .

EXPOSE 8080

CMD ["dotnet", "Hospital_API.dll"] 

# docker rm -f cons-dotnet && docker rmi img-dotnet
# docker build . -t img-dotnet

# docker run -d -p 8080:8080 --name cons-dotnet img-dotnet