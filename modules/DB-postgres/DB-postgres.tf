resource "azurerm_subnet" "internal" {
  name                 = var.subnet_postgres_name
  resource_group_name  = var.resource_group_name
  virtual_network_name = var.vnet_name
  address_prefixes     = var.subnet_postgres_add_prefixes
  service_endpoints    = var.subnet_postgres_service_endpoints
}
resource "azurerm_postgresql_server" "example" {
  name                = var.postgresql_server_name
  resource_group_name = var.resource_group_name
  location            = var.resource_group_location
  version             = var.version1

  administrator_login          = var.administrator_login
  administrator_login_password = var.administrator_login_password
  sku_name                     = var.sku_name1  # You can choose an appropriate SKU

  ssl_enforcement_enabled    = true
  ssl_minimal_tls_version_enforced = var.ssl_minimal_tls_version_enforce  # Change based on your security requirements

  tags = {
    environment = "production"
  }
}

# Create a PostgreSQL database
resource "azurerm_postgresql_database" "example" {
  name                = var.database_name
  resource_group_name = var.resource_group_name
  server_name         = azurerm_postgresql_server.example.name
  charset             = var.charset
  collation           = var.collation
}

# Allow all Azure services to access the PostgreSQL server (you can customize this rule based on your needs)
resource "azurerm_postgresql_virtual_network_rule" "example" {
  name                                 = var.postgres_vn_name
  resource_group_name                  = var.resource_group_name
  server_name                          = azurerm_postgresql_server.example.name
  subnet_id                            = azurerm_subnet.internal.id
  ignore_missing_vnet_service_endpoint = var.postgres_ignore_missing_vnet_service_endpoint
}