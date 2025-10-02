import { LearningMaterial } from "./types";

export const errorHandling: LearningMaterial = {
  id: "error-handling",
  title: "Error Handling",
  category: "Advanced",
  description: "Pelajari cara menangani error dan exception dalam Python",
  content: `
# Error Handling

Error handling memungkinkan program menangani kesalahan dengan graceful tanpa crash.

## Mengapa Error Handling Penting?

- **Prevent crashes** - Program tidak berhenti mendadak
- **User experience** - Pesan error yang informatif
- **Debugging** - Mudah menemukan dan memperbaiki bug
- **Robust programs** - Program yang tahan terhadap input tak terduga

## Types of Errors

### Syntax Errors
\`\`\`python
# Error sebelum program dijalankan
print("Hello World"  # Missing closing parenthesis
\`\`\`

### Runtime Errors (Exceptions)
\`\`\`python
# Error saat program berjalan
print(10 / 0)        # ZeroDivisionError
print(number)        # NameError (variable not defined)
print("5" + 5)       # TypeError
\`\`\`

## Try-Except Basic

### Basic Syntax
\`\`\`python
try:
    # Code yang mungkin error
    result = 10 / 0
except:
    # Code yang dijalankan jika ada error
    print("Terjadi error!")
\`\`\`

### Specific Exception
\`\`\`python
try:
    number = int(input("Masukkan angka: "))
    result = 10 / number
    print(f"Hasil: {result}")
except ValueError:
    print("Input bukan angka valid!")
except ZeroDivisionError:
    print("Tidak bisa dibagi dengan nol!")
\`\`\`

## Multiple Exceptions

### Multiple Except Blocks
\`\`\`python
try:
    file_name = input("Nama file: ")
    with open(file_name, 'r') as file:
        content = file.read()
        lines = int(input("Berapa baris? "))
        print(content[:lines])
        
except FileNotFoundError:
    print("File tidak ditemukan!")
except ValueError:
    print("Input bukan angka!")
except PermissionError:
    print("Tidak ada permission untuk file ini!")
\`\`\`

### Grouping Exceptions
\`\`\`python
try:
    x = int(input("Angka: "))
    result = 100 / x
except (ValueError, ZeroDivisionError) as e:
    print(f"Error: {e}")
\`\`\`

## Exception Information

### Getting Error Details
\`\`\`python
try:
    result = int("abc")
except ValueError as e:
    print(f"Error type: {type(e).__name__}")
    print(f"Error message: {e}")
    print(f"Error args: {e.args}")
\`\`\`

## Else and Finally

### Else Clause
\`\`\`python
try:
    number = int(input("Masukkan angka: "))
except ValueError:
    print("Bukan angka valid!")
else:
    # Dijalankan jika TIDAK ada exception
    print(f"Angka yang dimasukkan: {number}")
    print("Berhasil convert ke integer!")
\`\`\`

### Finally Clause
\`\`\`python
try:
    file = open("data.txt", "r")
    content = file.read()
    print(content)
except FileNotFoundError:
    print("File tidak ditemukan!")
finally:
    # Selalu dijalankan, ada error atau tidak
    print("Cleanup: Menutup file...")
    try:
        file.close()
    except:
        pass
\`\`\`

## Raising Exceptions

### Raise Custom Exception
\`\`\`python
def check_age(age):
    if age < 0:
        raise ValueError("Umur tidak boleh negatif!")
    if age > 150:
        raise ValueError("Umur tidak realistis!")
    return True

try:
    user_age = int(input("Umur: "))
    check_age(user_age)
    print("Umur valid!")
except ValueError as e:
    print(f"Error: {e}")
\`\`\`

### Re-raising Exceptions
\`\`\`python
def divide_numbers(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Log: Pembagian dengan nol terdeteksi")
        raise  # Re-raise exception ke caller

try:
    result = divide_numbers(10, 0)
except ZeroDivisionError:
    print("Error handling di level atas")
\`\`\`

## Custom Exception Classes

\`\`\`python
class CustomError(Exception):
    """Custom exception class"""
    pass

class AgeError(Exception):
    """Exception untuk umur tidak valid"""
    def __init__(self, age, message="Umur tidak valid"):
        self.age = age
        self.message = message
        super().__init__(self.message)

def validate_age(age):
    if age < 0:
        raise AgeError(age, "Umur tidak boleh negatif")
    if age > 150:
        raise AgeError(age, "Umur terlalu tua")

try:
    validate_age(-5)
except AgeError as e:
    print(f"AgeError: {e.message} (umur: {e.age})")
\`\`\`

## Common Exception Types

- **ValueError** - Nilai tidak sesuai tipe yang diharapkan
- **TypeError** - Operasi pada tipe data yang salah  
- **NameError** - Variable tidak terdefinisi
- **IndexError** - Index list/string di luar range
- **KeyError** - Key tidak ada di dictionary
- **FileNotFoundError** - File tidak ditemukan
- **ZeroDivisionError** - Pembagian dengan nol
- **AttributeError** - Attribute/method tidak ada
- **ImportError** - Module tidak bisa diimport

## Best Practices

### 1. Be Specific
\`\`\`python
# ❌ Terlalu umum
try:
    result = risky_operation()
except:
    print("Something went wrong")

# ✅ Spesifik
try:
    result = risky_operation()
except (ValueError, TypeError) as e:
    print(f"Input error: {e}")
except ConnectionError as e:
    print(f"Network error: {e}")
\`\`\`

### 2. Don't Ignore Exceptions
\`\`\`python
# ❌ Silent failure
try:
    risky_operation()
except:
    pass

# ✅ Log atau handle
try:
    risky_operation()
except Exception as e:
    print(f"Warning: {e}")
    # atau logging.warning(e)
\`\`\`

### 3. Use Finally for Cleanup
\`\`\`python
# ✅ Pastikan resource dibersihkan
connection = None
try:
    connection = database.connect()
    data = connection.fetch()
except ConnectionError:
    print("Database error")
finally:
    if connection:
        connection.close()
\`\`\`

## Practical Examples

### Safe Input Function
\`\`\`python
def safe_input(prompt, input_type=str, default=None):
    """Safe input dengan type conversion dan default value"""
    while True:
        try:
            user_input = input(prompt)
            if input_type == str:
                return user_input
            elif input_type == int:
                return int(user_input)
            elif input_type == float:
                return float(user_input)
        except ValueError:
            print(f"Invalid input. Expected {input_type.__name__}")
            if default is not None:
                print(f"Using default: {default}")
                return default
        except KeyboardInterrupt:
            print("\\nOperation cancelled by user")
            return default

# Usage
age = safe_input("Enter age: ", int, 0)
name = safe_input("Enter name: ", str, "Anonymous")
\`\`\`

**"Error handling membuat program kamu lebih robust dan user-friendly!"** - Ariski
  `,
  codeExample: `# Contoh Error Handling

print("=== BASIC TRY-EXCEPT ===")

# 1. Basic error handling
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
        return None

print(f"10 / 2 = {safe_divide(10, 2)}")
print(f"10 / 0 = {safe_divide(10, 0)}")

print("\\n=== MULTIPLE EXCEPTIONS ===")

# 2. Handle multiple exception types
def safe_convert_and_divide():
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        result = num1 / num2
        print(f"Result: {result}")
        
    except ValueError:
        print("Error: Please enter valid numbers!")
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
    except Exception as e:
        print(f"Unexpected error: {e}")

# Uncomment to test interactively
# safe_convert_and_divide()

print("\\n=== EXCEPTION INFORMATION ===")

# 3. Getting detailed error information
def demonstrate_exception_info():
    test_cases = [
        ("int('abc')", lambda: int('abc')),
        ("10 / 0", lambda: 10 / 0),
        ("[1,2,3][5]", lambda: [1,2,3][5]),
        ("{'a': 1}['b']", lambda: {'a': 1}['b'])
    ]
    
    for description, operation in test_cases:
        try:
            result = operation()
            print(f"{description} = {result}")
        except Exception as e:
            print(f"{description} -> {type(e).__name__}: {e}")

demonstrate_exception_info()

print("\\n=== ELSE AND FINALLY ===")

# 4. Try-except-else-finally
def file_processor(filename):
    file_handle = None
    try:
        print(f"Trying to open {filename}...")
        file_handle = open(filename, 'r')
        content = file_handle.read()
        print(f"File content length: {len(content)}")
        
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found!")
    except PermissionError:
        print(f"Error: Permission denied for '{filename}'!")
    else:
        print("File processed successfully!")
    finally:
        print("Cleanup: Closing file handle...")
        if file_handle and not file_handle.closed:
            file_handle.close()
        print("Done.\\n")

# Test with non-existent file
file_processor("non_existent_file.txt")

print("\\n=== CUSTOM EXCEPTIONS ===")

# 5. Custom exception classes
class ValidationError(Exception):
    """Custom exception for validation errors"""
    pass

class AgeValidationError(ValidationError):
    """Specific exception for age validation"""
    def __init__(self, age, message="Invalid age"):
        self.age = age
        self.message = message
        super().__init__(f"{message}: {age}")

def validate_person_data(name, age, email):
    """Validate person data with custom exceptions"""
    errors = []
    
    # Name validation
    if not name or len(name.strip()) < 2:
        errors.append("Name must be at least 2 characters")
    
    # Age validation
    if age < 0:
        raise AgeValidationError(age, "Age cannot be negative")
    if age > 150:
        raise AgeValidationError(age, "Age seems unrealistic")
    
    # Email validation (simple)
    if "@" not in email or "." not in email:
        errors.append("Invalid email format")
    
    if errors:
        raise ValidationError("; ".join(errors))
    
    return True

# Test validation
test_data = [
    ("Alice", 25, "alice@email.com"),
    ("", 30, "test@email.com"),
    ("Bob", -5, "bob@email.com"),
    ("Charlie", 200, "charlie@email.com"),
    ("Diana", 28, "invalid-email")
]

for name, age, email in test_data:
    try:
        validate_person_data(name, age, email)
        print(f"✓ Valid: {name}, {age}, {email}")
    except AgeValidationError as e:
        print(f"✗ Age Error: {e}")
    except ValidationError as e:
        print(f"✗ Validation Error: {e}")

print("\\n=== PRACTICAL ERROR HANDLING ===")

# 6. Safe input function
def get_number_input(prompt, min_val=None, max_val=None):
    """Get number input with validation and error handling"""
    while True:
        try:
            value = float(input(prompt))
            
            if min_val is not None and value < min_val:
                print(f"Value must be at least {min_val}")
                continue
                
            if max_val is not None and value > max_val:
                print(f"Value must be at most {max_val}")
                continue
                
            return value
            
        except ValueError:
            print("Please enter a valid number!")
        except KeyboardInterrupt:
            print("\\nOperation cancelled by user")
            return None

# Simulate input (in real scenario, this would be interactive)
def simulate_calculator():
    """Calculator with comprehensive error handling"""
    print("=== SAFE CALCULATOR ===")
    
    operations = {
        '+': lambda x, y: x + y,
        '-': lambda x, y: x - y,
        '*': lambda x, y: x * y,
        '/': lambda x, y: x / y,
        '**': lambda x, y: x ** y,
        '%': lambda x, y: x % y
    }
    
    # Simulate input values (replace with get_number_input in interactive mode)
    test_calculations = [
        (10, '+', 5),
        (10, '/', 0),  # Division by zero
        (2, '**', 1000),  # Large result
        (10, '%', 3),
        (10, '/', 3)
    ]
    
    for num1, op, num2 in test_calculations:
        try:
            if op not in operations:
                raise ValueError(f"Unknown operation: {op}")
            
            result = operations[op](num1, num2)
            print(f"{num1} {op} {num2} = {result}")
            
        except ZeroDivisionError:
            print(f"Error: Cannot divide {num1} by zero!")
        except OverflowError:
            print(f"Error: Result too large for {num1} {op} {num2}")
        except ValueError as e:
            print(f"Error: {e}")
        except Exception as e:
            print(f"Unexpected error: {e}")

simulate_calculator()

print("\\n=== ERROR LOGGING EXAMPLE ===")

# 7. Error logging for debugging
import time
from datetime import datetime

class ErrorLogger:
    """Simple error logger"""
    def __init__(self):
        self.errors = []
    
    def log_error(self, error_type, message, context=None):
        """Log error with timestamp"""
        log_entry = {
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'type': error_type,
            'message': str(message),
            'context': context
        }
        self.errors.append(log_entry)
        print(f"[ERROR] {log_entry['timestamp']} - {error_type}: {message}")
    
    def get_error_summary(self):
        """Get summary of logged errors"""
        if not self.errors:
            return "No errors logged"
        
        error_types = {}
        for error in self.errors:
            error_type = error['type']
            error_types[error_type] = error_types.get(error_type, 0) + 1
        
        summary = f"Total errors: {len(self.errors)}\\n"
        for error_type, count in error_types.items():
            summary += f"  {error_type}: {count}\\n"
        
        return summary

# Test error logging
logger = ErrorLogger()

risky_operations = [
    ("divide", lambda: 10 / 0),
    ("convert", lambda: int("abc")),
    ("access", lambda: [1, 2, 3][10]),
    ("key_access", lambda: {"a": 1}["b"])
]

for op_name, operation in risky_operations:
    try:
        result = operation()
        print(f"{op_name}: Success - {result}")
    except Exception as e:
        logger.log_error(
            type(e).__name__, 
            str(e), 
            {"operation": op_name}
        )

print("\\n" + logger.get_error_summary())`,
  keyPoints: [
    "Try-except blocks mencegah program crash saat error",
    "Gunakan specific exception types daripada generic Exception",
    "Else clause dijalankan jika tidak ada exception",
    "Finally clause selalu dijalankan untuk cleanup",
    "Raise digunakan untuk membuat custom exception",
    "Custom exception classes untuk error handling yang spesifik",
    "Jangan ignore exceptions - selalu handle atau log",
    "Exception information tersedia melalui exception object",
    "Best practice: be specific, don't ignore, cleanup resources",
  ],
  nextSteps: [
    "Praktikkan dengan latihan error handling",
    "Pelajari logging module untuk production apps",
    "Coba buat aplikasi dengan robust error handling",
    "Pelajari debugging techniques dan tools",
  ],
  relatedExercises: ["10"],
};
